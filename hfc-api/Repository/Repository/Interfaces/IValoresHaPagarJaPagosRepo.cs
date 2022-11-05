using hfc_api.Models;

namespace hfc_api.Repository.Repository.Interfaces
{
  public interface IValoresHaPagarJaPagosRepo {
    Task SaveChangesAsync();
    Task<ValoresHaPagarJaPagos> GetValoresHaPagarJaPagosId(int Id);
    // Task<IEnumerable<ValoresHaPagarJaPagos>> GetAllValoresHaPagarJaPagos(int id);
    IEnumerable<ValoresHaPagarJaPagos> GetAllValoresHaPagarJaPagos(int id);
    Task CreateValoresHaPagarJaPagos(ValoresHaPagarJaPagos valoresHaPagarJaPagos);
    void DeleteValoresHaPagar(ValoresHaPagarJaPagos valoresHaPagarJaPagos);
  }
}
