using System.ComponentModel.DataAnnotations;

namespace hfc_api.Dtos.Dtos.CartaoMeioDePagamento
{
  public class TipoDeCartaoUpdateDto {
    public DateTime data_cadastro { get; set; }
    public String? descricao { get; set; }
  }
}
