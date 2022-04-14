using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DotNet_back.Model
{
    public class UpdateTaskModel
    {
        public TaskModel CurrentTask { get; set; }
        public TaskModel UpdateTask { get; set; }
    }
}
