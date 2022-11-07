using hfc_api.Models.Views;

namespace hfc_api.Repository.Views
{
  public interface IValoresHaPagarRepoViews {
    Task SaveChangesAsync();
    Task<ValoresHaPagarViews> GetValoresHaPagarId(int Id);
    Task<IEnumerable<ValoresHaPagarViews>> GetAllValoresHaPagarAtivos();
    IEnumerable<ValoresHaPagarViews> GetAllValoresHaPagarByUser(int idUser);
  }
}
