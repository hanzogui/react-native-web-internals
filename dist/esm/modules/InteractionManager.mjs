import { invariant } from "./invariant.mjs";
import { requestIdleCallback } from "./requestIdleCallback/index.mjs";
class EventEmitter {
  _registry = {};
  addListener(eventType, listener, context) {
    const registrations = this._allocate(eventType);
    const registration = {
      context,
      listener,
      remove: () => {
        registrations.delete(registration);
      }
    };
    registrations.add(registration);
    return registration;
  }
  emit(eventType, ...args) {
    const registrations = this._registry[eventType];
    if (registrations != null) {
      for (const registration of Array.from(registrations)) {
        registration.listener.apply(registration.context, args);
      }
    }
  }
  _allocate(eventType) {
    let registrations = this._registry[eventType];
    if (registrations == null) {
      registrations = /* @__PURE__ */new Set();
      this._registry[eventType] = registrations;
    }
    return registrations;
  }
}
class TaskQueue {
  _queueStack;
  _onMoreTasks;
  constructor({
    onMoreTasks
  }) {
    this._onMoreTasks = onMoreTasks;
    this._queueStack = [{
      tasks: [],
      popable: true
    }];
  }
  enqueueTasks(tasks) {
    tasks.forEach(task => this._enqueue(task));
  }
  cancelTasks(tasksToCancel) {
    this._queueStack = this._queueStack.map(queue => ({
      ...queue,
      tasks: queue.tasks.filter(task => !tasksToCancel.includes(task))
    })).filter((queue, idx) => queue.tasks.length > 0 || idx === 0);
  }
  hasTasksToProcess() {
    return this._getCurrentQueue().length > 0;
  }
  processNext() {
    const queue = this._getCurrentQueue();
    if (queue.length) {
      const task = queue.shift();
      try {
        if (typeof task === "object" && task && "gen" in task) {
          this._genPromise(task);
        } else if (typeof task === "object" && task && "run" in task) {
          ;
          task.run();
        } else {
          invariant(typeof task === "function", "Expected Function, SimpleTask, or PromiseTask, but got:\n" + JSON.stringify(task, null, 2));
          task();
        }
      } catch (e) {
        if (e instanceof Error) {
          const taskName = task && typeof task === "object" && "name" in task ? task.name : "";
          e.message = "TaskQueue: Error with task " + taskName + ": " + e.message;
        }
        throw e;
      }
    }
  }
  _enqueue(task) {
    this._getCurrentQueue().push(task);
  }
  _getCurrentQueue() {
    const stackIdx = this._queueStack.length - 1;
    const queue = this._queueStack[stackIdx];
    if (queue.popable && queue.tasks.length === 0 && stackIdx > 0) {
      this._queueStack.pop();
      return this._getCurrentQueue();
    } else {
      return queue.tasks;
    }
  }
  _genPromise(task) {
    const length = this._queueStack.push({
      tasks: [],
      popable: false
    });
    const stackIdx = length - 1;
    const stackItem = this._queueStack[stackIdx];
    task.gen().then(() => {
      stackItem.popable = true;
      if (this.hasTasksToProcess()) {
        this._onMoreTasks();
      }
    }).catch(ex => {
      setTimeout(() => {
        if (ex instanceof Error) {
          ex.message = `TaskQueue: Error resolving Promise in task ${task.name}: ${ex.message}`;
        }
        throw ex;
      }, 0);
    });
  }
}
const _emitter = new EventEmitter();
const InteractionManager = {
  Events: {
    interactionStart: "interactionStart",
    interactionComplete: "interactionComplete"
  },
  /**
   * Schedule a function to run after all interactions have completed.
   */
  runAfterInteractions(task) {
    const tasks = [];
    const promise = new Promise(resolve => {
      _scheduleUpdate();
      if (task) {
        tasks.push(task);
      }
      tasks.push({
        run: resolve,
        name: "resolve " + (task && typeof task === "object" && "name" in task && task.name || "?")
      });
      _taskQueue.enqueueTasks(tasks);
    });
    return {
      then: promise.then.bind(promise),
      done: promise.then.bind(promise),
      cancel: () => {
        _taskQueue.cancelTasks(tasks);
      }
    };
  },
  /**
   * Notify manager that an interaction has started.
   */
  createInteractionHandle() {
    _scheduleUpdate();
    const handle = ++_inc;
    _addInteractionSet.add(handle);
    return handle;
  },
  /**
   * Notify manager that an interaction has completed.
   */
  clearInteractionHandle(handle) {
    invariant(!!handle, "Must provide a handle to clear.");
    _scheduleUpdate();
    _addInteractionSet.delete(handle);
    _deleteInteractionSet.add(handle);
  },
  addListener: _emitter.addListener.bind(_emitter),
  /**
   * Set deadline for task processing
   */
  setDeadline(deadline) {
    _deadline = deadline;
  }
};
const _interactionSet = /* @__PURE__ */new Set();
const _addInteractionSet = /* @__PURE__ */new Set();
const _deleteInteractionSet = /* @__PURE__ */new Set();
const _taskQueue = new TaskQueue({
  onMoreTasks: _scheduleUpdate
});
let _nextUpdateHandle = null;
let _inc = 0;
let _deadline = -1;
function _scheduleUpdate() {
  if (!_nextUpdateHandle) {
    if (_deadline > 0) {
      _nextUpdateHandle = setTimeout(_processUpdate);
    } else {
      _nextUpdateHandle = requestIdleCallback(_processUpdate);
    }
  }
}
function _processUpdate() {
  _nextUpdateHandle = null;
  const interactionCount = _interactionSet.size;
  _addInteractionSet.forEach(handle => _interactionSet.add(handle));
  _deleteInteractionSet.forEach(handle => _interactionSet.delete(handle));
  const nextInteractionCount = _interactionSet.size;
  if (interactionCount !== 0 && nextInteractionCount === 0) {
    _emitter.emit("interactionComplete");
  } else if (interactionCount === 0 && nextInteractionCount !== 0) {
    _emitter.emit("interactionStart");
  }
  if (nextInteractionCount === 0) {
    const begin = Date.now();
    while (_taskQueue.hasTasksToProcess()) {
      _taskQueue.processNext();
      if (_deadline > 0 && Date.now() - begin >= _deadline) {
        _scheduleUpdate();
        break;
      }
    }
  }
  _addInteractionSet.clear();
  _deleteInteractionSet.clear();
}
export { InteractionManager };
//# sourceMappingURL=InteractionManager.mjs.map
