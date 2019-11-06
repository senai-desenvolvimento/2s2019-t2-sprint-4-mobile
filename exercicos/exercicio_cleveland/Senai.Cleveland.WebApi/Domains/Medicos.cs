using System;
using System.Collections.Generic;

namespace Senai.Cleveland.WebApi.Domains
{
    public partial class Medicos
    {
        public int MedicosId { get; set; }
        public string Nome { get; set; }
        public DateTime DataNascimento { get; set; }
        public int Crm { get; set; }
        public int? EspecialidadeId { get; set; }

        public Especialidades Especialidade { get; set; }
    }
}
