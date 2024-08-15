namespace ProximoTurno.Shared.DTO;

public class ClientDTO {
    public int Id { get; set; }
    public string Phone { get; set; } = null!;
    public string Address { get; set; } = null!;
    public string Email { get; set; } = null!;

    public DateOnly? BirthDay { get; set; }
    public string? HowFindUs { get; set; }
}