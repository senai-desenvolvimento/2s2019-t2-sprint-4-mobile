using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Cleveland.WebApi.Interfaces;

namespace Senai.Cleveland.WebApi.Repositories
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private IMedicoRepository MedicoRepository {get;set;}

        public MedicosController()
        {
            MedicoRepository = new MedicoRepository();
        }

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(MedicoRepository.Listar());
        }
    }
}