global using Microsoft.EntityFrameworkCore;
using hfc_api.Models;
using hfc_api.Models.Views;
using hfc_api.Models.CartaoMeioDePagamento;

namespace hfc_api.Data
{
    public class ApiDbContext : DbContext
    {
      public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

      public DbSet<ValoresHaPagar> valores_ha_pagar => Set<ValoresHaPagar>();
      public DbSet<ValoresHaPagarViews>? valoreshapagar => Set<ValoresHaPagarViews>();
      public DbSet<ValoresHaPagarJaPagos>? valores_ha_pagar_ja_pagos => Set<ValoresHaPagarJaPagos>();
      public DbSet<Cartao> cartaes => Set<Cartao>();
      public DbSet<TipoDeCartao> tipo_de_cartaes => Set<TipoDeCartao>();
      public DbSet<MeioDePagamentoViews> meiodepagamento => Set<MeioDePagamentoViews>();
    }
}
