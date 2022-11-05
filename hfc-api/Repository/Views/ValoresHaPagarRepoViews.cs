using hfc_api.Models.Views;
using hfc_api.Data;

namespace hfc_api.Repository.Views
{
  public class ValoresHaPagarRepoViews : IValoresHaPagarRepoViews
  {
    private readonly ApiDbContext _context;
    public ValoresHaPagarRepoViews(ApiDbContext context) {
      _context = context;
    }
    // public async Task<IEnumerable<ValoresHaPagar>> GetAllValoresHaPagar() {
    //   return await _context.valores_ha_pagar!.ToListAsync();
    // }
    public async Task<IEnumerable<ValoresHaPagarViews>> GetAllValoresHaPagar() {
      return await _context.valoreshapagar!.ToListAsync();
    }

    Task<ValoresHaPagarViews> IValoresHaPagarRepoViews.GetValoresHaPagarId(int Id)
    {
      throw new NotImplementedException();
    }

    Task IValoresHaPagarRepoViews.SaveChangesAsync()
    {
      throw new NotImplementedException();
    }
  }
}
