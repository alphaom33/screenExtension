import java.io.*;

class fileio {
    public static void main(String[] args) {
        writeGradient("visual.txt", "|", true);
        writeGradient("yes.txt", "", false);
    }

    private static void writeGradient(String name, String add, boolean line) {
        try {
            FileWriter a = new FileWriter(new File("data/" + name));
            for (int i = 0; i < 300; i++) {
                for (int j = 0; j < 200; j++) {
                    double transformedI = ((double) i) * (256.0 / 300.0);
                    String g = Integer.toHexString((int)Math.round(transformedI));
                    g = g.length() == 1 ? "0" + g : g;
                    double transformedJ = ((double) j) * (256.0 / 200.0);
                    String b = Integer.toHexString((int)Math.round(transformedJ));
                    b = b.length() == 1 ? "0" + b : b;
                    a.write("00" + g + b + add);
                }
                if (line) a.write("\n");
            }
            a.close();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }
}