using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagerEntities;
using TaskManagerDataLayer;
using AutoMapper;
using System.Data.Entity;
namespace TaskManagerBusinessLayer
{
    public class TaskService : ITaskService
    {
        Entities _context;
        IMapper mapper;

        public static TaskService CreateService()
        {
            return new TaskService(new Entities());
        }
        public TaskService(Entities context)
        {
            var mapConfig = new MapperConfiguration(x => x.CreateMap<TaskDetail, Tasks>().ReverseMap());
            mapper = mapConfig.CreateMapper();
            _context = context;

        }
        public void AddTask(Tasks task)
        {
            throw new NotImplementedException();
        }

        public List<Tasks> GetTasks()
        {
            var data = _context.TaskDetails.ToList<TaskDetail>();
            return mapper.Map<List<TaskDetail>, List<Tasks>>(data);

        }

        public void UpdateTasks(Tasks task)
        {
            throw new NotImplementedException();
        }
    }
}
