using hfc_api.Models;
using hfc_api.Data;
using hfc_api.Repository.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace hfc_api.Repository.Repository.Repository
{
  public class ValoresHaPagarJaPagosRepo : IValoresHaPagarJaPagosRepo
  {
    private readonly ApiDbContext _context;
    public ValoresHaPagarJaPagosRepo(ApiDbContext context) {
      _context = context;
    }
  
    public async Task CreateValoresHaPagarJaPagos(ValoresHaPagarJaPagos valoresHaPagarJaPagos)
    {
      if (valoresHaPagarJaPagos == null) {
        throw new ArgumentNullException(nameof(valoresHaPagarJaPagos));
      }

      await _context.AddAsync(valoresHaPagarJaPagos);
    }

    public async Task SaveChangesAsync()
    {
      await _context.SaveChangesAsync();
    }

    public IEnumerable<ValoresHaPagarJaPagos> GetAllValoresHaPagarJaPagos(int id)
    {
      var valoresHaPagarJaPagos = _context?.valores_ha_pagar_ja_pagos?
        .FromSqlRaw($"SELECT * FROM valores_ha_pagar_ja_pagos WHERE fk_valores_ha_pagar = {id} ")
        .ToList();

      if (valoresHaPagarJaPagos == null)
      {
        throw new ArgumentNullException(nameof(valoresHaPagarJaPagos));
      }
      return valoresHaPagarJaPagos;
    }
    
    public void DeleteValoresHaPagar(ValoresHaPagarJaPagos valoresHaPagarJaPagos)
    {
      if(valoresHaPagarJaPagos == null) {
        throw new ArgumentNullException(nameof(valoresHaPagarJaPagos));
      }
      _context!.valores_ha_pagar_ja_pagos!.Remove(valoresHaPagarJaPagos);
    }

    public async Task<ValoresHaPagarJaPagos> GetValoresHaPagarJaPagosId(int Id)
    {
      var valorHaPagarJaPago = await _context!.valores_ha_pagar_ja_pagos!.FirstOrDefaultAsync(v => v.codigo == Id);
      if ( valorHaPagarJaPago == null ) {
        throw new ArgumentNullException(nameof(valorHaPagarJaPago));
      }
      return valorHaPagarJaPago;
    }
  }
}
