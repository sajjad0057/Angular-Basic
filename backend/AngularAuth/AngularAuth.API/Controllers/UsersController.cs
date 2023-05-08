using AngularAuth.API.Contexts;
using AngularAuth.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularAuth.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _authContext;
        private readonly ILogger<UsersController> _logger;
        public UsersController(ILogger<UsersController> logger, AppDbContext dbContext)
        {
            _authContext = dbContext;
            _logger = logger;
        }

        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate([FromBody] User userObj)
        {
            try
            {
                if (userObj is null)
                    return BadRequest();

                var user = await _authContext.Users.FirstOrDefaultAsync(
                    x => x.UserName == userObj.UserName && x.Password == userObj.Password);

                if (user is null)
                    return NotFound(new { Message = "User not found!" });

                return Ok(new
                {
                    Message = "Login Success!"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex,ex.Message,ex.StackTrace);
                return Problem();
            }
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User userObj)
        {
            try
            {
                if (userObj is null)
                    return BadRequest();

                await _authContext.Users.AddAsync(userObj);
                await _authContext.SaveChangesAsync();

                return Ok(new { Message = "User Registered!" });
            }
            catch(Exception ex) 
            {
                _logger.LogError(ex,ex.Message,ex.StackTrace);
                return Problem();
            }
        }
    }
}
