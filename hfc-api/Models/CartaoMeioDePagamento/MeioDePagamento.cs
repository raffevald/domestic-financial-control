using System.ComponentModel.DataAnnotations;

namespace hfc_api.Models.CartaoMeioDePagamento
{
  public class MeioDePagamento {
    [Key]
    public int codigo { get; set; }
    [Required]
    public DateTime data_cadastro { get; set; }
    [Required]
    public int fk_cartao { get; set; }
    [Required]
    public int fk_tipo_de_cartao { get; set; }
    [Required]
    public int fk_usuario { get; set; }
  }
}