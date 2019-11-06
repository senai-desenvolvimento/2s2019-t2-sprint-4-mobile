using Senai.Cleveland.WebApi.Domains;
using Senai.Cleveland.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories
{
    public class EspecialidadeRepository : IEspecialidadeRepository
    {
        public void Cadastrar(Especialidades especialidade)
        {
            using(ClevalandContext ctx = new ClevalandContext())
            {
                ctx.Especialidades.Add(especialidade);
                ctx.SaveChanges();
            }
        }

        public List<Especialidades> Listar()
        {
            using(ClevalandContext ctx = new ClevalandContext())
            {
                return ctx.Especialidades.ToList();
            }
        }
    }
}
