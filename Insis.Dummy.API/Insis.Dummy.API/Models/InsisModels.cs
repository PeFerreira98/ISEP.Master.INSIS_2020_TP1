using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Insis.Dummy.API.Models
{
    public class Data1
    {
        public string Timeframe { get; set; }
    }

    public class Polo
    {
        public int _id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
    }

    public class Perito
    {
        public int _id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }

    }

    public class AreaConhecimento
    {
        public int _id { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }

    }

}
