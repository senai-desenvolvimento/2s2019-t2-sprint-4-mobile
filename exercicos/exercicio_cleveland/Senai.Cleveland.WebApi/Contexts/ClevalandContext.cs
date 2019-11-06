using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Senai.Cleveland.WebApi.Domains
{
    public partial class ClevalandContext : DbContext
    {
        public ClevalandContext()
        {
        }

        public ClevalandContext(DbContextOptions<ClevalandContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Especialidades> Especialidades { get; set; }
        public virtual DbSet<Medicos> Medicos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=localhost;Initial Catalog=Cleveland;Integrated Security=true;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Especialidades>(entity =>
            {
                entity.HasKey(e => e.EspecialidadeId);

                entity.Property(e => e.EspecialidadeId).HasColumnName("EspecialidadeID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Medicos>(entity =>
            {
                entity.HasIndex(e => e.Crm)
                    .HasName("UQ__Medicos__C1F887FF01139E3C")
                    .IsUnique();

                entity.Property(e => e.MedicosId).HasColumnName("MedicosID");

                entity.Property(e => e.Crm).HasColumnName("CRM");

                entity.Property(e => e.DataNascimento).HasColumnType("date");

                entity.Property(e => e.EspecialidadeId).HasColumnName("EspecialidadeID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Especialidade)
                    .WithMany(p => p.Medicos)
                    .HasForeignKey(d => d.EspecialidadeId)
                    .HasConstraintName("FK__Medicos__Especia__3A81B327");
            });
        }
    }
}
