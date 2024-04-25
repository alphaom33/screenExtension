import java.io.*;

class fileio {
    public static void main(String[] args) {
        try {
            FileWriter a = new FileWriter(new File("data/yes.txt"));
            for (int i = 0; i < 300 * 200; i++) {
                a.write("00000000\n");
            }
            a.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}