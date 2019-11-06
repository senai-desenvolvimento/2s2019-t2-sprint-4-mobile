using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Cleveland.WebApi.Domains;
using Senai.Cleveland.WebApi.Interfaces;
using Senai.Cleveland.WebApi.Repositories;

namespace Senai.Cleveland.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class EspecialidadesController : ControllerBase
    {
        private IEspecialidadeRepository EspecialidadeRepository { get; set; }

        public EspecialidadesController()
        {
            EspecialidadeRepository = new EspecialidadeRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(EspecialidadeRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Especialidades especialidade)
        {
            try
            {
                EspecialidadeRepository.Cadastrar(especialidade);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(new { mensagem = e.Message });
            }
        }
    }
}