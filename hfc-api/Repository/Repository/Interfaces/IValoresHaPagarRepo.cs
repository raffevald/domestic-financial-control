using hfc_api.Models;

namespace hfc_api.Repository.Repository.Interfaces
{
  public interface IValoresHaPagarRepo {
    Task SaveChangesAsync();
    Task<ValoresHaPagar> GetValoresHaPagarId(int Id);
    Task<IEnumerable<ValoresHaPagar>> GetAllValoresHaPagar();
    Task CreateValoresHaPagar(ValoresHaPagar valoresHaPagar);
    void DeleteValoresHaPagar(ValoresHaPagar valoresHaPagar);
  }
}
