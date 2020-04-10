using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Insis.Dummy.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet("1")]
        public Data1 Get1()
        {
            return new Data1
            {
                Timeframe = "10T"
            };
        }

        [HttpGet("GetPolos")]
        public IEnumerable<Polo> GetPolos()
        {
            List<Polo> polos = new List<Polo>();

            for (int i = 0; i < 5; i++)
                polos.Add(new Polo { Name = $"namePolo{i}" });

            return polos;
        }

        [HttpGet("GetPeritos")]
        public IEnumerable<Perito> GetPeritos() {
            var peritos = new List<Perito>();

            for (int i = 0; i < 5; i++)
                peritos.Add(new Perito { Name = $"namePerito{i}" });

            return peritos;
        }
    }

    public class Polo
    {
        public string Name { get; set; }
    }

    public class Perito
    {
        public string Name { get; set; }
    }

    public class Data1
    {
        public string Timeframe { get; set; }
    }
}
