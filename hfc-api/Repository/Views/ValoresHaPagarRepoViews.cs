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
    public async Task<IEnumerable<ValoresHaPagarViews>> GetAllValoresHaPagarAtivos() {
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
    public IEnumerable<ValoresHaPagarViews> GetAllValoresHaPagarByUser(int idUser)
    {
      var valoresPagar = _context?.valoreshapagar?
        .FromSqlRaw($"SELECT valoreshapagar.* FROM usuarios INNER JOIN valoreshapagar ON usuarios.codigo = valoreshapagar.usecode WHERE usuarios.codigo = {idUser}")
        .ToList();

      if (valoresPagar == null)
      {
        throw new ArgumentNullException(nameof(valoresPagar));
      }

      return valoresPagar;
    }
  }
}
