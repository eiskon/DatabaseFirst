using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly DataContext _context;
        public EmployeesController(DataContext context)
        {
            _context = context;
        }
        // GET api/employees
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {
           var employees = await _context.Employees.ToListAsync();

           return Ok(employees);
        }
    }
}