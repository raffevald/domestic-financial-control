using System.ComponentModel.DataAnnotations;

namespace hfc_api.Models.CartaoMeioDePagamento
{
  public class TipoDeCartao {
    [Key]
    public int codigo { get; set; }
    [Required]
    public DateTime data_cadastro { get; set; }
    [Required]
    public String? descricao { get; set; }
    [Required]
    public int fk_usuario { get; set; }
  }
}
