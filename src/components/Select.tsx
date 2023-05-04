/* eslint-disable @typescript-eslint/no-explicit-any */

type Props = {
  onSelect: (position: string | any) => void;
};

enum Positions {
    "Goleiro" = "Goleiro",
    "Laterais direito e esquerdo" = "Laterais direito e esquerdo",
    "Zagueiro" = "Zagueiro",
    "Volante" = "Volante",
    "Meia" = "Meia",
    "Atacante" = "Atacante",
  }
  

function SelectPosition({ onSelect }: Props) {
  return (
    <div className="mt-1">
      <label
        htmlFor="position"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Selecione a posição
      </label>
      <select
        id="position"
        name="position"
        onChange={(event) => onSelect(event.target.value)}
        className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-vasco focus:border-vasco-blue"
      >
        <option value="">Selecione uma posição</option>
        {Object.values(Positions).map((position) => (
          <option key={position} value={position}>
            {position}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectPosition;
