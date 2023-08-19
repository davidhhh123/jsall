def get_knight_moves(pos,color):
    moves = []
    x, y = pos
    
    
    offsets = [(1, 2), (2, 1), (2, -1), (1, -2), (-1, -2), (-2, -1), (-2, 1), (-1, 2)]
    
    if color == 'white':
        direction = -1
    else:
        direction = 1
    for dx, dy in offsets:
        new_x, new_y = x + dx, y + dy
        if 0 <= new_x < 8 and 0 <= new_y < 8:
            moves.append((new_x, new_y))
    
    return moves
def get_pawn_moves(pos, color):
    moves = []
    x, y = pos
    
    
    if color == 'white':
        direction = -1
    else:
        direction = 1
    
    
    new_x, new_y = x, y + direction
    if 0 <= new_x < 8 and 0 <= new_y < 8:
        moves.append((new_x, new_y))
    
    
    if y == 1 or y == 6:
        new_x, new_y = x, y + 2 * direction
        if 0 <= new_x < 8 and 0 <= new_y < 8:
            moves.append((new_x, new_y))
    
   
    for dx in (-1, 1):
        new_x, new_y = x + dx, y + direction
        if 0 <= new_x < 8 and 0 <= new_y < 8:
            moves.append((new_x, new_y))
    
    return moves

print(get_pawn_moves((3, 1), 'white'))


print(get_knight_moves((1, 0), 'white'))
