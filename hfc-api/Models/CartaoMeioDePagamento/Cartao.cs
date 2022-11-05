using System.ComponentModel.DataAnnotations;

namespace hfc_api.Models.CartaoMeioDePagamento
{
  public class Cartao {
    [Key]
    public int codigo { get; set; }
    [Required]
    public DateTime data_cadastro { get; set; }
    [Required]
    public String? descricao { get; set; }
  }
}