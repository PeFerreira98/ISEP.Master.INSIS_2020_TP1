using Insis.Dummy.API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

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
                polos.Add(new Polo { _id = i, Name = $"namePolo{i}", Text = $"namePolo{i}" });

            return polos;
        }

        [HttpGet("GetPeritos")]
        public IEnumerable<Perito> GetPeritos()
        {
            var peritos = new List<Perito>();

            for (int i = 0; i < 5; i++)
                peritos.Add(new Perito { _id = i, Name = $"namePerito{i}", Text = $"namePerito{i}" });

            return peritos;
        }

        [HttpGet("GetAreasConhecimento")]
        public IEnumerable<AreaConhecimento> GetAreasConhecimento()
        {
            var areaConhecimentoList = new List<AreaConhecimento>();

            for (int i = 0; i < 5; i++)
                areaConhecimentoList.Add(new AreaConhecimento { _id = i, Name = $"nameAreaConhecimento{i}", Text = $"nameAreaConhecimento{i}" });

            return areaConhecimentoList;
        }

        [HttpGet("GetObraInPolos")]
        public IEnumerable<PoloDetailed> GetObraInPolos()
        {
            var biblioteca = new Biblioteca();

            var rand = new Random(DateTime.Now.Millisecond);

            for (int i = 0; i < 5; i++)
            {
                var poloDet = new PoloDetailed($"namePolo{i}");

                for (int j = 0; j < rand.Next(0, 3); j++)
                    poloDet.Obras.Add(new Obra(rand.Next(0, 4), $"{rand.Next(3, 50)}€"));

                biblioteca.Polos.Add(poloDet);
            }

            return biblioteca.Polos;
        }

        [HttpGet("GetParecerList")]
        public IEnumerable<Parecer> GetParecerList()
        {
            return new List<Parecer>() {
                new Parecer() { _id = 0, Text = "Negativo"},
                new Parecer() { _id = 1, Text = "Positivo" }
                };
        }
    }
}