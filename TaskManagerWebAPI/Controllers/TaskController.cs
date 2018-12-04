using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TaskManagerBusinessLayer;
using TaskManagerEntities;
namespace TaskManagerWebAPI.Controllers
{
    public class TaskController : ApiController
    {
        ITaskService service;
        public TaskController()
        {
            service = TaskService.CreateService();
        }
        [HttpGet]
        public IHttpActionResult GetAllTask()
        {
            List<TaskDetails> data = service.GetTasks();
            return Ok(data);
        }
        [HttpPost]
        public IHttpActionResult Post(TaskDetails task)
        {
            bool re = service.AddTask(task);
            return Ok(re);

        }

    }
}
