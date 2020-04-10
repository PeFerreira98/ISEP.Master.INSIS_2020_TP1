using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Insis.Dummy.API.Models;

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
            var polos = new List<Polo>();

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

        [HttpGet("GetAreasConhecimento")]
        public IEnumerable<AreaConhecimento> GetAreasConhecimento() {
            var areaConhecimentoList = new List<AreaConhecimento>();

            for (int i = 0; i < 5; i++)
                areaConhecimentoList.Add(new AreaConhecimento { Name = $"nameAreaConhecimento{i}" });

            return areaConhecimentoList;
        }
    }
}
