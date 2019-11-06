using Senai.Cleveland.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Interfaces
{
    interface IMedicoRepository
    {
        List<Medicos> Listar();

    }
}
