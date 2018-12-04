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
        bool AddTask(TaskDetails task);
        List<TaskDetails> GetTasks();
        void UpdateTasks(TaskDetails task);
    }
}
