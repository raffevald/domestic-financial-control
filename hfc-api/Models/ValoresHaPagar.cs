using System.ComponentModel.DataAnnotations;

namespace hfc_api.Models
{
  public class ValoresHaPagar {
    [Key]
    public int codigo { get; set; }
    [Required]
    public string? status {get; set; }
    public DateTime data_vencimento { get; set; }
    public float valor_total { get; set; }
    public string? descricao {get; set; }
    [Required]
    public DateTime data_cadastro { get; set; }
    public int parcelas_totais { get; set; }
    public int parcelas_pagas { get; set; }
    public int status_dados { get; set; }
    public int fk_usuario { get; set; }
  }
}
