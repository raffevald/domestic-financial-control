using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.CartaoMeioDePagamento
{
  public class CartaoReadDto {
    public int codigo { get; set; }
    public DateTime data_cadastro { get; set; }
    public String? descricao { get; set; }
  }
}