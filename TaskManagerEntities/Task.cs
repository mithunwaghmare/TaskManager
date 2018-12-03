using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagerEntities
{
    public class Tasks
    {
        public int Task_ID { get; set; }
        
        public string Task { get; set; }
        
        public int Priority { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public virtual ParentTask ParentTaskDetail { get; set; }
    }
    public class ParentTask
    {
        public int Parent_ID { get; set; }
        public string Parent_Task { get; set; }
    }
}
