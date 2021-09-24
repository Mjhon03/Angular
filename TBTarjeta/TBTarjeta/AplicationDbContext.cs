using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TBTarjeta.Models;

namespace TBTarjeta
{
    public class AplicationDbContext: DbContext
    {
        public DbSet<TarjetaCredito> TarjetaCredito { set; get; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
        {

        }

    }
}
