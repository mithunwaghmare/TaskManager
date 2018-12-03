using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagerEntities;
namespace TaskManagerBusinessLayer
{
    public interface ITaskService
    {
        void AddTask(Tasks task);
        List<Tasks> GetTasks();
        void UpdateTasks(Tasks task);
    }
}
