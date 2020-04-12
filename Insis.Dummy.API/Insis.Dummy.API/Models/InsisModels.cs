using System.Collections.Generic;

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

    public class Biblioteca
    {
        public List<PoloDetailed> Polos { get; set; } = new List<PoloDetailed>();
    }

    public class PoloDetailed
    {
        public string Name { get; set; } = "PoloName";
        public List<Obra> Obras { get; set; } = new List<Obra>();

        public PoloDetailed(string name) => Name = name;
    }

    public class Obra
    {
        public string Estado { get; set; } = "New";
        public string Valor { get; set; } = "100€";

        public Obra(string valor) => Valor = valor;

    }
}
