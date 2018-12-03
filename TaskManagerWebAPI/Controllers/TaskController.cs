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
            List<Tasks> data = service.GetTasks();
            return Ok(data);
        }

    }
}
