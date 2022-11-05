using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.CartaoMeioDePagamento
{
  public class CartaoCreateDto {
    [Required]
    public DateTime data_cadastro { get; set; }
    [Required]
    public String? descricao { get; set; }
  }
}