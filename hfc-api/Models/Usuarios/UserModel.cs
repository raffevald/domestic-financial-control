namespace hfc_api.Models.Usuarios
{
  public class UserModel {
    [Key]
    public int codigo { get; set; }
    public DateTime data_cadastro { get; set; }
    public string? primeiro_nome { get; set; }
    public string? sobrenome { get; set; }
    public string? email { get; set; }
    public string? senha { get; set; }
    public string? avatarUrl { get; set; }
    public int fk_perfil_usuario { get; set; }
  }
}
