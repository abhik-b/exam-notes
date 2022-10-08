---
id: gx0wes5gz0irclfjvffusa4
title: Computer Architecture
desc: ''
updated: 1665119578094
created: 1663750024466
---

## Syllabus

### Digital Logic Circuits & Components :

- Digital Computers
- Logic Gates
- Boolean ALgebra
- Map Simplifications
- Combinational Circuits
- Flip-Flops
- Sequential Circuits
- Integrated Circuits
- Decoders
- Multiplexers
- Registers
- Counters
- Memory Unit

### Data Representation :

- Data Types,
- Number Systems and Conversion Complements,
- Fixed Point Representation,
- Floating-Point Representation,
- Error Detection Codes,
- Computer Arithmetic – Addition, Subtraction, Multiplication and Division Algorithms.

### Register Transfer and Micro operations :

- Register Transfer Language,
- Bus and Memory Transfers,
- Arithmetic, Logic and Shift Micro operations

### Basic Computer Organization and Design:

- Stored Program Organization and Instruction Codes,
- Computer Registers,
- Computer Instructions, Timing and Control,
- Instruction Cycle,
- Memory-Reference Instructions,
- Input-Output, Interrupt.

### Programming the Basic Computer :

- Machine Language,
- Assembly Language,
- Assembler,
- Program Loops,
- Subroutines,
- Input-Output Programming.

### Microprogrammed Control:

- Control Memory,
- Address Sequencing,
- Design of Control Unit.

### Central Processing Unit:

- General Register Organization,
- Stack Organization,
- Instruction Formats,
- Addressing Modes,
- RISC Computer,
- CISC Computer.

### Pipeline and Vector Processing:

- Parallel Processing,
- Pipelining,
- Arithmetic Pipeline,
- Instruction Pipeline,
- Vector Processing Array Processors.

### Input-Output Organization:

- Peripheral Devices,
- Input-Output Interface,
- Asynchronous Data Transfer,
- Modes of Transfer,
- Priority Interrupt,
- DMA,
- Serial Communication.

### Memory Hierarchy:

- Main Memory,
- Auxillary Memory,
- Associative Memory,
- Cache Memory,
- Virtual Memory,
- Memory Management Hardware.

### Multiprocessors:

- Characteristics of Multiprocessors,
- Interconnection Structures,
- Interprocessor Arbitration,
- Interprocessor Communication and Synchronization,
- Cache Coherence,
- Multicore Processors.

---

1. Decimal (0-9) Base 10
2. Binary 0,1 Base 2
3. Octal 0-7 Base 8
4. Hexadecimal 0-9,A-F
   Use this [video](https://youtu.be/NY2gz_Kzc0Q) as a reference.

# Conversion Formulas

- Binary $2^1$
- Octal $2^3$
- Hex $2^4$
- Dec 2<sup>10</sup>

## Binary to Octal & vice versa :

Since Octal is 2<sup>3</sup> therefore the table will have 3 columns. Also Since octal means 8 therefore half of 8 is 4 & that means in the 1st column 1st 4 digits would be 0. In the 2nd column 1st 2 digits (half of 4) would be 0. In the 3rd Column 1st 1 digit(half of 2) would be 0.

| Octal |     |     |     |
| ----- | --- | --- | --- |
| 0     | 0   | 0   | 0   |
| 1     | 0   | 0   | 1   |
| 2     | 0   | 1   | 0   |
| 3     | 0   | 1   | 1   |
| 4     | 1   | 0   | 0   |
| 5     | 1   | 0   | 1   |
| 6     | 1   | 1   | 0   |
| 7     | 1   | 1   | 1   |

**Binary to Octal** : Select the 3 digits from ==right to left== (left of decimal point) & ==left to right== (right of decimal point) & convert it to octal one by one.

Example 1 : (1010)<sub>2</sub> to Octal.

1. last 3 digits of 1010 , is 010. Now from the table **010 is 2**.
2. Now only one digit 1 is remaining. To convert it I will add 2 more 0s in left of 1 to make it 3digit , 001. Now 001 is 1.
3. So the octal is (12)<sub>8</sub> since we are going from right to left.

Example 2 : (110010110.10101)<sub>2</sub> to octal.

1. First lets convert digits left of decimal point
2. last 3 digits 110 is 6.
3. then 010 is 2.
4. then 110 is 6.
5. Now lets convert digits right of decimal point
6. first 3 digits 101 is 5.
7. next 01 remains , let's make it 3 digits by adding 0 at the end. Now it is 010 which is 2.
8. So the octal number is (626.52)<sub>8</sub>

Shortcuts :
Binary : 11101101 to octal. The trick is to take 3 digits from right to left 1by1 & compare them with this table & add the digits .

![](/assets/images/2022-09-21-14-18-26.png)

Select the last 3 digits 101 & its octal is 4+1 = 5. Similiarly 101 will be 5 & the remaining 11 , I will add 0 in the start & 011 will be 2+1 = 3. So the octal is 355.

**Octal to Binary** : Select digits one by one from right to left & convert them to binary.
Example 1: (67)<sub>8</sub> to Binary

1. 7 is 111
2. 6 is 110
3. 67 is (110111)<sub>2</sub>

Example 2 : (67.62)<sub>8</sub> to Binary

1. First convert digits on left of decimal
   1. 7 is 111
   2. 6 is 110
2. Then convert digits right of decimal
   1. 6 is 110
   2. 2 is 010
3. Then the binary is (110111.110010)<sub>2</sub>

_Shortcuts_ :
example 1: 24 to binary. The trick is to take 1 digit from right to left 1by1 & compare them with this table & write the digits . 4 is 100 & 2 is 10 but we will ad 0 in start to make it 3 digit. Therefore the binary is 010100

![](/assets/images/2022-09-21-14-19-19.png)

### example 2 : 56 to binary .

![](/assets/images/2022-09-21-14-20-04.png)

Note : Octal numbers are from 0 to 7 so we can covert them with this formula way to easily.

## Binary to Hexadecimal & vice versa :

Since Hexadecimal is 2<sup>4</sup> therefore the table will have 4 columns. Also Since hexadecimal means 16 therefore half of 16 is 8 & that means in the 1st column 1st 8 digits would be 0. In the 2nd column 1st 4 digits (half of 8) would be 0. In the 3rd Column 1st 1 digit(half of 2) would be 0.

|     | Hexa | decimal | to  | Binary |
| --- | ---- | ------- | --- | ------ |
| 0   | 0    | 0       | 0   | 0      |
| 1   | 0    | 0       | 0   | 1      |
| 2   | 0    | 0       | 1   | 0      |
| 3   | 0    | 0       | 1   | 1      |
| 4   | 0    | 1       | 0   | 0      |
| 5   | 0    | 1       | 0   | 1      |
| 6   | 0    | 1       | 1   | 0      |
| 7   | 0    | 1       | 1   | 1      |
| 8   | 1    | 0       | 0   | 0      |
| 9   | 1    | 0       | 0   | 1      |
| A   | 1    | 0       | 1   | 0      |
| B   | 1    | 0       | 1   | 1      |
| C   | 1    | 1       | 0   | 0      |
| D   | 1    | 1       | 0   | 1      |
| E   | 1    | 1       | 1   | 0      |
| F   | 1    | 1       | 1   | 1      |

**Binary to Hexadecimal** : Select 4 digits from right to left & convert them to hexadecimal.

Example 1 : (11010110)<sub>2</sub> to Hexadecimal

1. last 4 digits are 0110 , hexa is 6.
2. next 4 digits is D
3. so the hexa is (D6)<sub>16</sub>

Example 2 : (11010110.1101)<sub>2</sub> to hexa

1. first convert digits before decimal point. It is D6
2. digits after decimal is D
3. the final hexa is (D6.D)<sub>16</sub>

**Hexadecimal to Binary** : Select Digits 1 by 1 from right to left & convert to binary from above table.

Example 1 : (EF2) to binary

1. 2 is 0010
2. F is 1111
3. E is 1110
4. 111011110010 is binary of EF2

_Shortcuts_ :
Similiar process like octal shortcut

![](/assets/images/2022-09-21-14-21-02.png)
![](/assets/images/2022-09-21-14-21-17.png)

---

# Logic Gate

    0 means Low / False
    1 means High / True

## Basic GATES

### AND

This GATE returns 1 only if both the inputs are 1 otherwise 0. If 1 of the input is 0 then the output will be 0. The symbol of AND gate is `.` , `&` , `^`

| A   | B   | Y = A.B |
| --- | --- | ------- |
| 0   | 0   | 0       |
| 0   | 1   | 0       |
| 1   | 0   | 0       |
| 1   | 1   | 1       |

### OR

This GATE returns 1 if one of the input is 1 then output will be 1. It will return 0 only if both the inputs are 0. The symbol to represent OR Gate is `+`

### NOT

This GATE takes **Single** Input & returns **Single** Output. Whatever the input is output willbe exact opposite. Example : input 0 then output 1, input 1 then output 0.

![](/assets/images/2022-09-21-14-23-13.png)

## Universal GATES

A universal gate is a gate which can implement any Boolean function without need to use any other gate type.

### NAND

Whatever the output of AND is just opposite of that. Example below (here Y' repesents Output of NAND Gate):

| A   | B   | Y = A.B | Y'  |
| --- | --- | ------- | --- |
| 0   | 0   | 0       | 1   |
| 0   | 1   | 0       | 1   |
| 1   | 0   | 0       | 1   |
| 1   | 1   | 1       | 0   |

### NOR

Whatever the output of OR is just opposite of that.

## Arithmetic GATES

### XOR

Ex OR Means Exclusive OR . The eqn of XOR is `A . B' + A' . B` . If Inputs aresame tehno output is 0 otehrwise 1.

### X-NOR

Means Exclusive NOR . The eqn of XOR is `A . B + A' . B'`

## Truth Table

| A   | B   | AND (A.B) | OR (A+B) | NAND | NOR | XOR | X-NOR |
| --- | --- | --------- | -------- | ---- | --- | --- | ----- |
| 0   | 0   | 0         | 0        | 1    | 1   | 0   | 1     |
| 0   | 1   | 0         | 1        | 1    | 0   | 1   | 0     |
| 1   | 0   | 0         | 1        | 1    | 0   | 1   | 0     |
| 1   | 1   | 1         | 1        | 0    | 0   | 0   | 1     |

...

![](/assets/images/2022-09-21-14-25-23.png)

# Implement all Gates using NAND & NOR Gate

Building different gates using The NAND or NOR Gates. A simple Table from this [video](https://www.youtube.com/watch?v=w2hK0JVKmJc) which states that how many NAND & NOR Gates are required to create the other mentioned gates.

| Gates | NAND | NOR |
| ----- | ---- | --- |
| NOT   | 1    | 1   |
| AND   | 2    | 3   |
| OR    | 3    | 2   |
| XOR   | 4    | 5   |
| XNOR  | 5    | 4   |

To create a NOT Gate Only 1 NAND / NOR gate is required, only 1 input is given.

![](/assets/images/2022-09-21-14-26-11.png)

![](/assets/images/2022-09-21-14-27-07.png)

![](/assets/images/2022-09-21-14-27-29.png)

![](/assets/images/2022-09-24-11-09-56.png)

# Boolean Algebra

[Binary Arithmetic Video](https://www.youtube.com/watch?v=A2yWB_Zgutk&list=PLUhebcqFf6aEm07MOovpDrXcyxfNNZgGi&index=6)

#### 1. Commutative Law

A + B = B + A
A.B = B.A

#### 2. Associative Law

A + (B + C) = (A + B) + C
A.(B.C) = (A.B).C

#### 3. Distributive Law

A.(B + C) = A.B + A.C
A + (B . C) = (A+B) . (A+C)

#### Binary Addition

```
0 + 0 = 1
1 + 0 = 1
1 + 1 = 10
```

Example : 1010 + 0111

![](/assets/images/2022-09-21-14-30-37.png)

#### Binary Subtraction

```
0 - 0 = 0
1 - 0 = 1
1 - 1 = 0
```

0 - 1 = In this case 0 becomes 10 & the previous column if 1 becomes 0. We borrow 1 from a nearby column.

Example 1 :

![](/assets/images/2022-09-21-14-31-12.png)

Example 2 :

![](/assets/images/2022-09-21-14-31-46.png)

#### De Morgans Theorem

![](/assets/images/2022-09-21-14-32-14.png)

The above bar means complement(')
Example : (X+Y)' = X' . Y'

#### Rules of boolean algebra

![](/assets/images/2022-09-21-14-32-40.png)

This [video](https://youtu.be/Jmtl4kkP_WA?t=3264) has important rules explaination.

![](/assets/images/2022-09-21-14-33-03.png)

![](/assets/images/2022-09-21-14-33-27.png)

![](/assets/images/2022-09-21-14-33-54.png)
