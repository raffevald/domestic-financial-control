global using hfc_api.Data;

namespace hfc_api.Repository.Repository.Repository
{
  public class ValoresHaPagarRepo : IValoresHaPagarRepo
  {
    private readonly ApiDbContext _context;
    public ValoresHaPagarRepo(ApiDbContext context) {
      _context = context;
    }
    public async Task CreateValoresHaPagar(ValoresHaPagar valoresHaPagar) {
      if (valoresHaPagar == null) {
        throw new ArgumentNullException(nameof(valoresHaPagar));
      }

      await _context.AddAsync(valoresHaPagar);
    }

    public void DeleteValoresHaPagar(ValoresHaPagar valoresHaPagar) {
      if(valoresHaPagar == null) {
        throw new ArgumentNullException(nameof(valoresHaPagar));
      }

      _context!.valores_ha_pagar!.Remove(valoresHaPagar);
    }

    public async Task<IEnumerable<ValoresHaPagar>> GetAllValoresHaPagar() {
      return await _context.valores_ha_pagar!.ToListAsync();
    }

    public async Task<ValoresHaPagar> GetValoresHaPagarId(int Id) {
      var valorHaPagar = await _context!.valores_ha_pagar!.FirstOrDefaultAsync(v => v.codigo == Id);
      if (valorHaPagar == null ) {
        throw new ArgumentNullException(nameof(valorHaPagar));
      }
      return valorHaPagar;
    }

    public async Task SaveChangesAsync() {
      await _context.SaveChangesAsync();
    }

    public IEnumerable<ValoresHaPagar> GetAllValoresHaPagarByUser(int idUser)
    {
      // var valoresPagar = _context!.valores_ha_pagar!
      //   .FromSqlRaw($"SELECT valores_ha_pagar.* as valores_ha_pagar FROM usuarios INNER JOIN valores_ha_pagar ON usuarios.codigo = valores_ha_pagar.fk_usuario WHERE usuarios.codigo = {idUser}")
      //   .ToList();

      var valoresPagar = _context!.valores_ha_pagar!
        .FromSqlRaw($"SELECT valores_ha_pagar.* FROM usuarios,  valores_ha_pagar WHERE usuarios.codigo = valores_ha_pagar.fk_usuario AND usuarios.codigo = {idUser}")
        .ToList();

      if (valoresPagar == null)
      {
        throw new ArgumentNullException(nameof(valoresPagar));
      }

      return valoresPagar;
    }
  }
}
