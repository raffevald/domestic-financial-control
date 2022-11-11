namespace hfc_api.Repository.Repository.Interfaces
{
  public interface IUsersInfosRepo {
    Task SaveChangesAsync();
    // Task<UserInfos> GetUserInfosByUserLogin(string userLogin);
    // Task<IEnumerable<Cartao>> GetAllCartao();
    // Task CreateCartao(Cartao cartao);
    // void DeleteCartao(Cartao cartao);
    IEnumerable<UserInfos> GetUserInfosByUserLogin(string userLogin);
    // Task<UserModel> GetUserAuthentication(string userLogin, string userPassword);
  }
}
