namespace hfc_api.Models.UserInfosModels
{
  public class UserInfos {
    [Key]
    public int codigo { get; set; }
    public string? primeiro_nome { get; set; }
    public string? sobrenome { get; set; }
    public string? email { get; set; }
    public string? vatar_url { get; set; }
    public string? perfil_do_usuario { get; set; }
    
  }
}
