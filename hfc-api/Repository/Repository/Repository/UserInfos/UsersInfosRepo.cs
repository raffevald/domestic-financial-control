namespace hfc_api.Repository.Repository.Repository
{
  public class UsersInfosRepo : IUsersInfosRepo {
    private readonly ApiDbContext _context;
    public UsersInfosRepo(ApiDbContext context) {
      _context = context;
    }
    
    public IEnumerable<UserInfos> GetUserInfosByUserLogin(string userLogin) {
      var userInfos = _context!.user_infos!
        .FromSqlRaw($"SELECT * FROM user_infos WHERE user_infos.email = '{userLogin}'");
      if (userInfos == null) {
        throw new ArgumentNullException(nameof(userInfos));
      }
      return userInfos;
    }

    public async Task SaveChangesAsync() {
      await _context.SaveChangesAsync();
    }
  }
}