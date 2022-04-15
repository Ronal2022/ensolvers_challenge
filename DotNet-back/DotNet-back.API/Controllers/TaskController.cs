using Microsoft.AspNetCore.Mvc;
using DotNet_back.Model;
using System.Collections.Generic;

namespace DotNet_back.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        private static readonly List<TaskModel> Tasks = new List<TaskModel>
        {
            new TaskModel{ Name = "Buy groceries", Completed = false},
            new TaskModel{ Name = "Prepare weekly report", Completed = false},
            new TaskModel{ Name = "Write to candidates", Completed = false}
        };

        public TaskController()
        {
        }

        [HttpGet]
        public List<TaskModel> Get() { 
        
            return Tasks;
        }

        [HttpPost]
        public List<TaskModel> Post(TaskModel newTask)
        {
            Tasks.Add(newTask); 
            return Tasks;
        }

        [HttpPut]
        public List<TaskModel> Put(UpdateTaskModel updateTasks)
        {
            foreach (TaskModel existingTask in Tasks)
            {
                if (existingTask.Name == updateTasks.CurrentTask.Name) 
                {
                    existingTask.Name = updateTasks.UpdateTask.Name;
                }
            }
            return Tasks;
        }

        [HttpDelete]
        public List<TaskModel> Delete(TaskModel deleteTask)
        {
            TaskModel toDelete= null;
            foreach (TaskModel existingTask in Tasks)
            {
                if (existingTask.Name == deleteTask.Name) {
                    toDelete = existingTask;
                };
            }
            Tasks.Remove(toDelete);
            return Tasks;
        }
    }
}