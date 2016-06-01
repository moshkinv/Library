using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.Data.Models
{
    public class Book : Entity
    {
        public int InventaryNumber { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public int Year { get; set; }
        public bool IsVisible { get; set; } = true;
    }
}
