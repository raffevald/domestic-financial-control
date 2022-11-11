namespace hfc_api.Repository.Repository.Interfaces.CartaoMeioDePagamento
{
  public interface IMeioDePagamentoViewsRepo {
    Task SaveChangesAsync();
    Task<MeioDePagamentoViews> GetMeioDePagamentoViewsId(int Id);
    Task<IEnumerable<MeioDePagamentoViews>> GetAllMeioDePagamentoViews();
    IEnumerable<MeioDePagamentoViews> GetAllMeioDePagamentoViewsByUser(int idUser);
    // IEnumerable<MeioDePagamentoViews> GetAllMeioDePagamentoViewsByUser(string email); 

    // Task CreateMeioDePagamentoViews(MeioDePagamentoViews meioDePagamentoViews);
    // void DeleteMeioDePagamentoViews(MeioDePagamentoViews meioDePagamentoViews);
  }
}
