using hfc_api.Models.Views;

namespace hfc_api.Repository.Views
{
  public interface IValoresHaPagarRepoViews {
    Task SaveChangesAsync();
    Task<ValoresHaPagarViews> GetValoresHaPagarId(int Id);
    // Task<IEnumerable<ValoresHaPagarViews>> GetAllValoresHaPagar();
    Task<IEnumerable<ValoresHaPagarViews>> GetAllValoresHaPagarAtivos();
    // Task CreateValoresHaPagar(ValoresHaPagar valoresHaPagar);
    // void DeleteValoresHaPagar(ValoresHaPagarViews valoresHaPagar);
  }
}
