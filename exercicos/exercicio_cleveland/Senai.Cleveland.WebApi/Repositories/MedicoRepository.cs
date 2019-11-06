using Microsoft.EntityFrameworkCore;
using Senai.Cleveland.WebApi.Domains;
using Senai.Cleveland.WebApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        public List<Medicos> Listar()
        {
            using(ClevalandContext ctx = new ClevalandContext())
            {
                return ctx.Medicos.Include(x => x.Especialidade).ToList();
            }
        }
    }
}
